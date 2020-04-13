import gql from 'graphql-tag';

const getPastLaunches = gql`
  query getPastLaunches( $limit: Int = 8, $offset: Int = 0  ){
    launchesPast(limit: $limit, offset: $offset) {
      id
      mission_name
      launch_date_local
      links {
        article_link
        video_link
        flickr_images
      }
      rocket {
        rocket_name
        first_stage {
          cores {
            core {
              status
            }
          }
        }
        #   second_stage {
        #     payloads {
        #       payload_type
        #       payload_mass_kg
        #       payload_mass_lbs
        #     }
        #   }
      }
      ships {
        home_port
        # image
      }
    }
  }
`;

export default getPastLaunches;