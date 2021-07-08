import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { withApollo } from "@apollo/react-hoc";

export const VACCINE_LIST = gql`
  {
    vaccines {
      id
      name
      vaccine_batches {
        id
        number
        quantity
        year
        vaccine_items {
          id
          used
        }
      }
    }
  }
`;

function VaccineList() {
  const { loading, error, data } = useQuery(VACCINE_LIST);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      <ul>
      {data.vaccines.map((vaccine) => (
        <>
          <li key={vaccine.id}>{vaccine.id} - {vaccine.name}</li>
          <ul>
            Batches: {vaccine.vaccine_batches.length}
            {vaccine.vaccine_batches && vaccine.vaccine_batches.map((batch) => (
              <>
              <li key={batch.id}>{batch.number} - {batch.quantity} - {batch.year}</li>
              <ul>
                Vaccines: {batch.vaccine_items.length}
                {batch.vaccine_items && batch.vaccine_items.map((item) => (
                  <li key={item.id}>{item.id} - {`${item.used}`}</li>
                ))}
              </ul>
              </>
            ))}
          </ul>
        </>
      ))}
      </ul>
    </div>
  );
}

export default withApollo(VaccineList);