import {render,screen,cleanup,fireEvent} from "@testing-library/react";

import Login from "../Login";

   test("validate correct imput",() => {
    const component= render("/login");
    const inputNode = component.getByText("email");
//    const inputNode = component.getByText("UserName");
  
   });

