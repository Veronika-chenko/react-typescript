import { FC, ReactNode, useState } from "react";

export enum CardVariant {
  outlined = 'outlined',
  primary = 'prinary',
}

interface CarsProps {
    width?: string;
    height?: string;
    variant: CardVariant;
    children?: ReactNode;
    onClick: (num: number) => void; 
}

const Card: FC<CarsProps> = ({
    width,
    height,
    variant,
    children,
    onClick }) =>
{
    const [state, setState] = useState(0);
    return (
        <div style={{
            width,
            height,
            border: variant === CardVariant.outlined ? '1px solid grey' : 'none',
            background: variant === CardVariant.primary ? 'lightgrey' : ''
        }}
        onClick={() => onClick(state)}>
            {children}
        </div>
    )
}

export default Card