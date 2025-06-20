/// CSS ///
import "../../../css/global/pre-sets.scss";
import "../../../css/global/classes.scss";
import "../../../css/global/components.scss";
import "../../../css/Layouts/Confirmation.scss";

import { useEffect, useState, type FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, SubForm } from "../../components/components.tsx";
import type { PropsPages } from "../../../typescript/props.ts";
import LayoutLayout from "../../templates/Layout.tsx";
import IsEmpty from "../../templates/IsEmpty.tsx";
import type { CompanyType, StateType } from "../../../typescript/types.ts";
import { updateCompany } from "../../../data/redux/slices/restaurant/companySlice.ts";


const CompanyLayout: FunctionComponent<any> = (props: PropsPages) => {

  const idPageTag = props.idPageTag;

  const classNameLayoutDefault: string = "Confirmation";
  const classNameBackgroundLayout: string = "bg-4";
  const classNameTSX: string = `${classNameLayoutDefault} ${classNameBackgroundLayout}`;
  const classNameNoItems: string = "NoItems";
  const message: string = "Nenhuma Informação do Restaurante para Atualizar!";

  const companyInformation: CompanyType = useSelector((state: StateType): CompanyType => state.company);

  const [nome, setNome] = useState<string>(companyInformation.name);
  const [slogan, setSlogan] = useState<string>(companyInformation.slogan);
  const [endereco, setEndereco] = useState<string>(companyInformation.endereco);

  const dispatch = useDispatch();

  const layoutIsEmpty = false;

  useEffect(() => {
    setNome(companyInformation.name);
    setSlogan(companyInformation.slogan);
    setEndereco(companyInformation.endereco);
  }, [companyInformation]);

  const handleUpdateInformationCompany = (): void => {
    dispatch(updateCompany({
      name: nome,
      slogan: slogan,
      endereco: endereco
    }));
  }

  return (
    <IsEmpty
      test={layoutIsEmpty}
      WarningProps={{
        id: idPageTag,
        className: `${classNameTSX} ${classNameNoItems}`,
        message: message
      }}
    >
      <LayoutLayout id={idPageTag} className="Confirmation bg-4">
        {!layoutIsEmpty ? (
          <>
            <Form className="Form">
              <SubForm className="SubFrom">
                <h1 className="Title">Nome do Restaurante</h1>
                <input
                  className="Input-Text"
                  name="nome"
                  placeholder={"Digite o Nome do Restaurante"}
                  value={nome}
                  onChange={e => setNome(e.target.value)}
                />
              </SubForm>
              <SubForm className="SubFrom">
                <h1 className="Title">Slogan do Restaurante</h1>
                <input
                  className="Input-Text"
                  name="slogan"
                  placeholder={"Digite o Slogan do Restaurante"}
                  value={slogan}
                  onChange={e => setSlogan(e.target.value)}
                />
              </SubForm>
              <SubForm className="SubFrom">
                <h1 className="Title">Endereço do Restaurante</h1>
                <input
                  className="Input-Text"
                  name="endereco"
                  placeholder={"Digite o Endereço do Restaurante"}
                  value={endereco}
                  onChange={e => setEndereco(e.target.value)}
                />
              </SubForm>
            </Form>
            <button
              className="Button-Default-4"
              onClick={handleUpdateInformationCompany}
            >
              Salvar
            </button>
          </>
        ) : null}
      </LayoutLayout>
    </IsEmpty>
  );
}

export default CompanyLayout;