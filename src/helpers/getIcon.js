import { ReactComponent as IconFolderClosed } from '../img/folder-closed.svg'
import { ReactComponent as IconFolderOpened } from '../img/folder-opened.svg'
import { ReactComponent as IconPlus } from '../img/plus.svg'
import { ReactComponent as IconMinus } from '../img/minus.svg'
import { ReactComponent as IconFile } from '../img/file.svg'


export const getIcon = (type) => {
    switch (type) {
        case 'folder': return <IconFolderClosed />
        case 'folder_opened': return <IconFolderOpened />
        case 'plus': return <IconPlus />
        case 'minus': return <IconMinus />
        case 'file': return <IconFile />
        default: return null
    }
}
  
