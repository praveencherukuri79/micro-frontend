import React from 'react';
import ProductsPage from './ProductsPage';
import { WebComponentBase, registerWebComponent } from './utils/webComponent';

class ProductsWebComponent extends WebComponentBase {
  protected renderComponent(): React.ReactElement {
    return <ProductsPage />;
  }
}

registerWebComponent('products-widget', ProductsWebComponent);

export default ProductsWebComponent;
