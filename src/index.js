import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Select } from "antd";
import { templates } from "./data";
const { Option } = Select;

function onChange(value) {
  console.log(`selected ${value}`);
}

function onBlur() {
  console.log("blur");
}

function onFocus() {
  console.log("focus");
}

function onSearch(val) {
  console.log("search:", val);
}

const sortByTemplateName = (a, b) => {
  if (isNaN(parseInt(a.title[0], 10)) === isNaN(parseInt(b.title[0], 10))) {
    return a.title.localeCompare(b.title);
  } else if (isNaN(parseInt(a.title[0], 10))) {
    return -1;
  }

  return 1;
  // let a1 = a.title, b1 = b.title;
  // let isDigit = x => x >= 48 && x <= 57;

  // for (let i = 0, n = Math.min(a1.length, b1.length); i < n; i++) {
  //   let aCharCode = a1.charCodeAt(i), bCharCode = b1.charCodeAt(i);
    
  //   if (aCharCode !== bCharCode) {
  //     if (isDigit(aCharCode) && !isDigit(bCharCode)) return 1;
  //     if (isDigit(bCharCode) && !isDigit(aCharCode)) return -1;
  //     return aCharCode - bCharCode;
  //   }
  // }

  // return a1.length - b1.length;
};

const sortedTemplates = templates.templateData.sort(sortByTemplateName)

ReactDOM.render(
  <Select
    showSearch
    style={{ width: 200 }}
    placeholder="Select a person"
    optionFilterProp="children"
    onChange={onChange}
    onFocus={onFocus}
    onBlur={onBlur}
    onSearch={onSearch}
    filterOption={(input, option) =>
      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
  >
    {sortedTemplates.map(({ title, id }) => {
      return (
        <Option value={id} key={id}>
          {title}
        </Option>
      );
    })}
  </Select>,
  document.getElementById("container")
);
