import React, { useState } from 'react';
import { getIcon, renderTree } from '../helpers';

const linearTree = [
    { name: "root", type:'dir', parent: null, id:1 },
    { name: "folder 1", type:'dir', parent: 1, id:2 },
    { name: "file 1 in folder 1",type:'file', parent: 2, id: 4 },
    { name: "folder 2",type:'dir', parent: 1, id:3 },
    { name: "folder 1 in folder 2",type:'dir', parent: 3, id: 5},
    { name: "file 1 folder 1 in folder 2",type:'file', parent: 5, id:6 },
    { name: "file 2 folder 1 in folder 2", type:'file', parent: 5, id:7 },
];

const SimpleTree = function () {
    const [expandedNodes, setExpandedNodes] = useState([])
    
    const handleExpandCollapse = (id) => {
        !expandedNodes.includes(id)
          ? setExpandedNodes([ ...expandedNodes, id])
          : setExpandedNodes(expandedNodes.filter((x) => x !== id))
      }

    const tree = renderTree(linearTree)


    function drawBranch(branch) {
       return branch.map((elem) => {
           const { id, type, name, children } = elem;
           const isExpanded = expandedNodes.includes(id)
            return (
                <div key={id}>
                    <div className='tree_row'>
                        <div
                            className='expand'
                            onClick={handleExpandCollapse.bind(this, id)}
                        >
                            {type === 'file'
                                ? null
                                : isExpanded ? getIcon('minus') : getIcon('plus')}
                        </div>
                        <div> {type === 'dir'? getIcon('folder'): getIcon('file') }</div>
                        <div>{name}</div>
                    </div>
                    {children&&isExpanded? <div className='branch'>{drawBranch(children)}</div>: null}
                </div>
            )
        })
    }

    return (
        <div className='tree'>
            <h1 className='title'>Simple Tree </h1>
            {drawBranch(tree)} 
        </div>
    )
}

export default SimpleTree;
