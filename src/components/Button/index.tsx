import { ButtonHTMLAttributes, ReactNode } from "react";
import { ButtonComponent } from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
     children?: ReactNode
   }

export function Button({children, ...props}: ButtonProps) {
 return (
          <ButtonComponent {...props} >
               {children}
          </ButtonComponent>
 );
}