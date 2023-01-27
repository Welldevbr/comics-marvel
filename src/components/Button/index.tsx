import { ButtonHTMLAttributes, ReactNode } from "react";
import { ButtonWraper } from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
     children?: ReactNode
   }

export function Button({children, ...props}: ButtonProps) {
 return (
          <ButtonWraper {...props} >
               {children}
          </ButtonWraper>
 );
}