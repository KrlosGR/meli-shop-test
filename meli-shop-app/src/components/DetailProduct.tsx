import { RouteComponentProps } from '@reach/router';
import React, { FC } from 'react';
// import { AppContext, IGlobalContext } from '../contexts/AppContext';

const DetailProduct: FC<RouteComponentProps> = ({ location }) => {
  // const { state }: IGlobalContext = useContext(AppContext);
  // const params = useParams()
  // const [{ state, loading }, fetchItems] = useItemsFetch(searchQry);
  // const [item] = useItemFetch('MLA852292328');
  const { pathname }: any = location;

  return (
    <div>
      <h2>Detalle del Producto</h2>
      {pathname}
    </div>
  )
}

export default DetailProduct;

