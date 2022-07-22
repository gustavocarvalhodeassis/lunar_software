import { CgFileDocument, CgViewComfortable, CgDollar } from 'react-icons/cg'

const iconSize = 35

export const aboutCardData = [
    {
        icon: <CgFileDocument size={iconSize} />,
        text: 'Documentos fiscais',
        rec: true,
    },
    {
        icon: <CgViewComfortable size={iconSize} />,
        text: 'Controle de estoque',
        rec: false,
    },
    {
        icon: <CgDollar size={iconSize} />,
        text: 'Controle financeiro',
        rec: false,
    },

]