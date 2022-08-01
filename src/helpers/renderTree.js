export const  renderTree = (linearTree) => {
    return linearTree.reduceRight((acc, elem, i) => {
        const { name, type, parent, id } = elem;

        const children = acc[id]
            ? acc[id].children
            : [];
        
        const treeBranch = elem.type === 'dir'
            ? { name, type, children, id}
            : {name, type, id }

        if (!parent) {
            acc.root.push(treeBranch)
        }

        if (!acc[parent]) {
            acc[parent] = { children: [treeBranch] }
        } else {
            acc[parent].children.push(treeBranch)
        }

        
        return i===0 ? acc.root : acc ;
    }, {root:[]})
}
