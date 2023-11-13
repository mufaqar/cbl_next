import {icons} from  '@/const/icons'
export const getIcon = (iconname) => {
    const filter_icon = icons.find(i => i.name === iconname  )
    return filter_icon

    
}