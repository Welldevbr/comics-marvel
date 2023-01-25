import { ButtonHTMLAttributes, ReactNode } from "react";
import { ButtonContainer } from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
     children?: ReactNode
   }

export function ButtonComponent({children, ...props}: ButtonProps) {
 return (
          <ButtonContainer {...props} >
               {children}
          </ButtonContainer>
 );
}