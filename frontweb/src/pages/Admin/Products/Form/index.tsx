import './styles.css';

const Form = () => {
  return (
    <div className="product-crud-container">
      <div className="base-card product-crud-form-card">
        <h1 className="product-crud-form-title">DADOS DO PRODUTO</h1>

        <form action="">
          <div className="row product-card-inputs-container">
            <div className="col-lg-6 product-card-inputs-left-container">
              <div className="margin-bottom-30">
                <input type="text" className="form-control base-input" />
              </div>
              <div className="margin-bottom-30">
                <input type="text" className="form-control base-input" />
              </div>
              <div>
                <input type="text" className="form-control base-input" />
              </div>
            </div>
            <div className="col-lg-6">
              <div>
                <textarea
                  name=""
                  rows={10}
                  className="form-control base-input h-auto"
                />
              </div>
            </div>
          </div>
          <div className="product-card-buttons-container">
            <button className="btn btn-outline-danger product-card-button">
              CANCELAR
            </button>
            <button className="btn btn-primary product-card-button text-white">
              SALVAR
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
