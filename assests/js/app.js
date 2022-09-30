//acsess all elements
const parent = document.querySelector( ".pla" );
const childs = Array.from( parent.children );
const allPens = document.querySelector( ".pens" );
const childsTwo = Array.from( allPens.children )
// get item from locak storge on load function
window.onload = function save()
{
    //check if local storge noe empthy
    if ( localStorage.getItem( "opened" ) !== null )
    {
        // add to local storge
        match( localStorage.getItem( "opened" ) )
    }
}
//loop on all links
childs.filter( e =>
{
    // prevent defult and call back match data atr on click
    e.addEventListener( "click", function ( i )
    {
        i.preventDefault()
        // call match function
        match( i.target.dataset.city )
    } )
} )

// function remove and add to local and check class
function match( link )
{
    // remove all elements from local storge
    localStorage.removeItem( "opened" )
    // loop on all pens elements
    childsTwo.filter( i =>
    {
        if ( !i.classList.contains( "apear" ) )
        {
            if ( i.dataset.city == link )
            {
                i.classList.add( "apear" )
                localStorage.setItem( "opened", link )
                i.style.padding = "5px"
            }
        } else
        {
            i.classList.remove( "apear" )
        }
    } )
}
