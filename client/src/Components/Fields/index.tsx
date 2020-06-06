import React from "react";
import { DropdownList } from "react-widgets";

import _ from "lodash";
import "./Fields.scss";

export interface dropDownListProps {
  onChange?: () => void;
  data?: string[];
  valueField?: string;
  textField?: string;
  placeholder?: string;
  value?: any;
  type?: any;
  label?: string;
  dropUp?: boolean;
  name?: string;
}

export interface inputProps {
  onChange?: any;
  label?: string;
  className?: string;
  placeholder?: string;
  autoComplete?: string;
  value?: any;
  type?: string;
  iconName?: string;
  name?: string;
}

export const Field = (props: any) =>
  props.component(_.omit(props, ["component"]));

export const renderDropdownList = ({
  onChange,
  data,
  valueField,
  textField,
  placeholder,
  value,
  type,
  label,
  dropUp,
}: dropDownListProps) => {
  switch (type) {
    case "label":
      return (
        <div className="label-dropdown">
          <DropdownList
            data={data}
            valueField={valueField}
            textField={textField}
            onChange={onChange}
            placeholder={placeholder}
            value={value}
            dropUp={dropUp && true}
            valueComponent={({ item }) => (
              <span className="flex-row">
                <p className="p2 tertiary-text">{label}:</p>
                {/* <p className="p2 primary-text">{item[textField]}</p> */}
              </span>
            )}
          />
        </div>
      );
    case "products":
      return (
        <div className={`simple-dropdown_products ${dropUp ? "dropdown-dropUp" : ""}`}>
          <DropdownList
            data={data}
            valueField={valueField}
            textField={textField}
            onChange={onChange}
            placeholder={placeholder}
            value={value}
            dropUp={dropUp && true}
          />
        </div>
      );
    default:
      return (
        <div className={`simple-dropdown ${dropUp ? "dropdown-dropUp" : ""}`}>
          <DropdownList
            data={data}
            valueField={valueField}
            textField={textField}
            onChange={onChange}
            placeholder={placeholder}
            value={value}
            dropUp={dropUp && true}
          />
        </div>
      );
  }
};

export const RenderInput = ({
  placeholder,
  className,
  onChange,
  autoComplete,
  value,
  type,
  name,
}: inputProps) => (
  <div className="field_container">
    <label>{name}</label>
    <input
      autoComplete={autoComplete}
      placeholder={placeholder}
      className={className}
      onChange={onChange}
      value={value}
      type={type}
      name={name}
    />
  </div>
);

export const ImageInput = () => (
  <div className="field_container">
    <label className="image_label">
      <input type="file" accept="image/*" />
      {/* Upload Image */}
    </label>
  </div>
);

export const SubmitButton = () => (
  <div className="field_container">
    <input type="submit" name="Submit" className="submit_btn" />
  </div>
);

export const renderIconInput = ({
  placeholder,
  className,
  onChange,
  autoComplete,
  value,
  type,
  iconName,
}: inputProps) => (
  <div className="input-container">
    <input
      autoComplete={autoComplete}
      placeholder={placeholder}
      className={className}
      onChange={onChange}
      value={value}
      type={type}
    />
    <div className={`icon ${iconName}`} />
  </div>
);
