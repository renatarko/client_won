import xor from "lodash.xor";
import { ParsedUrlQueryInput } from "querystring";
import { useEffect, useState } from "react";

import Button from "components/Button";
import Heading from "components/Heading";

import Checkbox from "components/Checkbox";
import Radio from "components/Radio";
import { Close, FilterList } from "styled-icons/material-outlined";
import * as S from "./styles";

export type ItemProps = {
  title: string;
  name: string;
  type: string;
  fields: Field[];
};

type Field = {
  label: string;
  name: string;
};

type Values = ParsedUrlQueryInput;

export type ExploreSidebarProps = {
  items: ItemProps[];
  initialValues?: Values;
  onFilter: (values: Values) => void;
};

const ExploreSidebar = ({
  items,
  onFilter,
  initialValues = {},
}: ExploreSidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [values, setValues] = useState(initialValues);

  useEffect(() => {
    onFilter(values);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values]);

  const handleFilterMenu = () => {
    setIsOpen(false);
  };

  const handleCheckbox = (name: string, value: string) => {
    const currentList = (values[name] as []) || [];
    setValues((s) => ({ ...s, [name]: xor(currentList, [value]) }));
  };

  const handleRadio = (name: string, value: string | boolean) => {
    setValues((s) => ({ ...s, [name]: value }));
  };

  return (
    <S.Wrapper isOpen={isOpen}>
      <S.Overlay aria-hidden={isOpen} />
      <S.IconWrapper>
        <FilterList aria-label="open filters" onClick={() => setIsOpen(true)} />
        <Close aria-label="close filters" onClick={() => setIsOpen(false)} />
      </S.IconWrapper>
      <S.Content>
        {items.map((item) => (
          <S.Items key={item.title}>
            <Heading lineBottom lineColor="secondary" size="small">
              {item.title}
            </Heading>

            {item.type === "checkbox" &&
              item.fields.map((field) => (
                <Checkbox
                  key={field.name}
                  label={field.label}
                  name={field.name}
                  labelFor={field.name}
                  isChecked={(values[item.name] as string[])?.includes(
                    field.name
                  )} // {platforms: ["windows"]}
                  onCheck={() => handleCheckbox(item.name, field.name)}
                />
              ))}

            {item.type === "radio" &&
              item.fields.map((field) => (
                <Radio
                  key={field.name}
                  id={field.name}
                  value={field.name}
                  label={field.label}
                  name={item.name}
                  labelFor={field.name}
                  defaultChecked={
                    String(field.name) === String(values[item.name])
                  } // [{sort_by: "field.name"}]
                  onChange={() => handleRadio(item.name, field.name)}
                />
              ))}
          </S.Items>
        ))}
      </S.Content>

      <S.Footer>
        <Button fullWidth size="medium" onClick={handleFilterMenu}>
          Filter
        </Button>
      </S.Footer>
    </S.Wrapper>
  );
};

export default ExploreSidebar;
