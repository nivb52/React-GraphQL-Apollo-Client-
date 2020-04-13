import React from 'react';
import { Link } from 'react-router-dom';
// graphql
import { Query } from 'react-apollo';
import getPastLaunches from "../graphql/queries/getPastLaunches";
// self
import {rocketLoader, renderFetchError} from '../cmps/ui/load-and-error.jsx';
import { formatUTCDate, getMinyImage } from '../services/util';


const LaunchesPast = () => {

  return (
    <Query query={getPastLaunches  }>
      {({ data, loading, error }) => {
        if (loading) return  rocketLoader()
        if (error)  return renderFetchError()

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
                  <Link to={"/launch/"+id} >
                  <figure className="card-photo">
                    <span className="date">
                      {' '}
                      {formatUTCDate(launch_date_local)}
                    </span>

                    <img
                    //   src = {ships.image}
                      src={getMinyImage(links.flickr_images[0])}
                      alt={ships.home_port}
                    />
                  </figure>
                  </Link>
                  <h3 className="card-title">{mission_name}</h3>
                  <span className="card-desc"> 
                        {rocket.rocket_name} as rocket
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
