import {icons} from  '@/const/icons'
export const getIcon = (iconname) => {
    const filter_icon = icons.find(i => i.name === iconname  )
    return filter_icon
}

export const getUniqueCities = (cities) => {
  const uniqueIds = new Set();
  const uniqueCities = cities?.filter((item) => {
    if (uniqueIds.has(item.cities.nodes[0].name)) {
      return false;
    }
    uniqueIds.add(item.cities.nodes[0].name);
    return true;
  });
  return uniqueCities
}