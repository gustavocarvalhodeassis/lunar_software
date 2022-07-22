import { CgFileDocument, CgViewComfortable, CgDollar } from 'react-icons/cg'

const iconSize = 35

export const aboutCardData = [
    {
        icon: <CgFileDocument size={iconSize} />,
        text: <>Documentos <br /> fiscais.</>,
        rec: true,
    },
    {
        icon: <CgViewComfortable size={iconSize} />,
        text: <>Controle <br /> de estoque.</>,
        rec: false,
    },
    {
        icon: <CgDollar size={iconSize} />,
        text: <>Controle <br /> financeiro.</>,
        rec: false,
    },

]