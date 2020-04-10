import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { formatUTCDate } from './date.helper';

import '../cmps/common/rocket-loader.css';
import rocketLoader from '../rocket-128px.svg';

const GetPastLaunches = gql`
  query GetPastLaunches {
    launchesPast(limit: 2) {
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
        image
      }
    }
  }
`;

const LaunchesPast = () => {
  return (
    <Query query={GetPastLaunches}>
      {({ data, loading, error }) => {
        if (loading)
          return (
            <img className="rocket" src={rocketLoader} alt="loader-icon" />
          );
        if (error) return <p> Something went wrong </p>;

        return (
          <div className="container">
            {data.launchesPast.map(
              ({
                mission_name,
                launch_date_local,
                links,
                ships,
                rocket,
                id,
              }) => (
                <div className="card --lunches" key={id}>
                  <figure className="card-photo">
                    <span className="date">
                      {' '}
                      {formatUTCDate(launch_date_local)}
                    </span>

                    <img
                      // src = {ships.image}
                      src={links.flickr_images[0]}
                      alt={ships.home_port}
                    />
                  </figure>
                  <h3 className="card-title">{mission_name}</h3>
                  <span className="card-subtitle">
                  <span className="card-desc"> with rocket: </span>
                    {rocket.rocket_name}
                  </span>
                  {ships.home_port && (
                    <span className="card-desc"> from: {ships.home_port}</span>
                  )}
                </div>
              )
            )}
          </div>
        );
      }}
    </Query>
  );
};

export default LaunchesPast;