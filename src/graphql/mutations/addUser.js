import gql from 'graphql-tag';


const addUserMutation = gql`
mutation addUser($objects: [users_insert_input!]!) {
  insert_users(objects: $objects) {
    affected_rows
  }
}
`;

export default addUserMutation