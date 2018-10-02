module.exports.generateArraySeq = function( from, size )
{
    if ( !this.isPositiveInteger( from ) || 
         !this.isPositiveInteger( size ) )
    {
        throw new TypeError( "Inputs must be positive integers" );
    }
    
    if ( from > size )
    {
        throw new Error( "From must be smaller or equal to size" );
    }
    
    let res = [];
    for ( let i = from; i < size; i++ )
    {
        res[i] = i;
    }
    
    return res;
} // generateArray

module.exports.isPositiveInteger = function( n )
{
    if ( ( !Number.isInteger( n ) || ( n < 0 ) ) )
    {
        return false;
    }
    return true;
} // isPositiveInteger