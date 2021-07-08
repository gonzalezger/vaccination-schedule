import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { withApollo } from "@apollo/react-hoc";

export const PATIENT_LIST = gql`
  {
    patients {
      id
      first_name
      last_name
      birthday
      gender
    }
  }
`;

function PatientList() {
  const { loading, error, data } = useQuery(PATIENT_LIST);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      {data.patients.map((patient, index) => (
        <>
          <li key={patient.id}>{patient.id} - {patient.first_name} {patient.last_name} - {patient.gender} - {patient.birthday}</li>
        </>
      ))}
    </div>
  );
}

export default withApollo(PatientList);