import React from 'react';
import { useParams } from 'react-router-dom';
// graphql
import { useQuery } from '@apollo/react-hooks';

import gql from 'graphql-tag';
// self
import { rocketLoader, renderFetchError } from '../cmps/ui/load-and-error.jsx';
import { formatUTCDate, getMinyImage } from '../services/util';

const GET_LAUNCH = gql`
  query GetLaunch($id: ID!) {
    launch(id: $id) {
      mission_name
      rocket {
        second_stage {
          payloads {
            orbit
            payload_mass_kg
            manufacturer
          }
        }
        rocket_name
      }
      ships {
        home_port
        year_built
        name
        active
      }
      launch_site {
        site_name
      }
      launch_year
      links {
        flickr_images
        reddit_media
        video_link
        article_link
        wikipedia
      }
      details
      launch_date_local
    }
  }
`;

const LaunchDetails = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_LAUNCH, {variables: {id}});
    
  if (loading) return rocketLoader();
  if (error) return renderFetchError(error);
  const {launch} = data
  const {manufacturer, orbit, payload_mass_kg} = launch.rocket.second_stage.payloads
  const launchLocation = launch.ships.home_port || launch.launch_site.site_name
  return (
    <div className="container middle">
      <div className="card --lunches-details">
        <h1 className="card-title">mission: {launch.mission_name}</h1>
        <span className="card-desc">{formatUTCDate(launch.launch_date_local)} - launch details</span>
        <p>{launch.details}</p>
        <p>The rocket {launch.rocket.rocket_name} 
            {orbit ? ' fly on the orbit '+ orbit : '' },
            {launchLocation ?  ' from ' + launchLocation : ''}
            {payload_mass_kg ? ' with self mass of '+ payload_mass_kg : '' }
            . 
            It built on {launch.ships.year_built}
            { manufacturer ? 'by ' + manufacturer : ''}
            and currently it is {launch.ships.active ? ' active': ' not active'}
            .
        </p>
        <div className="container gallery">
            {launch.links.flickr_images && launch.links.flickr_images.map((img) => (
            <figure className="card-photo">
                <img
                src={getMinyImage(img)}
                alt={launch.mission_name + 'on luanch day'}
                />
            </figure>
            ))}
        </div>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={launch.links.wikipedia}
        >
          wikipedia
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={launch.links.reddit_media}
        >
          reddit_media
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={launch.links.video_link}
        >
          video_link
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={launch.links.article_link}
        >
          article_link
        </a>
      </div>
    </div>
  );
};

export default LaunchDetails;
