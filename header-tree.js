/** Remote children keys with empty array */
function stripeEmptyChildren(object){
  let { children, ...rest} = object
  if(children.length){
    return {
      ...rest,
      children:   children.map(child=> stripeEmptyChildren(child))
    }
  }
  return rest;
}

/** Generate hearder tags tree from html page */
function generateTree(){
  // select all header tags
  const  allHeaderTags = document.querySelectorAll("h1, h2, h3, h4");

  const tree = {children:[]};

  // Iterate through each header tag and build the tree structure
  allHeaderTags.forEach(header=>{
    // Get current header's tag btween (1-6)
    const depth = Number(header.tagName.charAt(1));
    // text content and header id
    const [text, id] = [header.textContent, header.id]; 
    // Create a new node in the tree for this header tag
    const node = { text: text, depth, id, children: [] };
    
    // Find the parent node for this header tag
    let parentHeader = tree;

    for (let j = 1; j < depth; j++) {
      const lastChild = parentHeader.children[parentHeader.children.length - 1];
      if (lastChild && lastChild.children) {
        parentHeader = lastChild;
      }
    }
    parentHeader.children.push(node);
  })

  return tree.children.map((tree)=> ({...stripeEmptyChildren(tree)}))
}