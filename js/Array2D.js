class Array2D {
  constructor(x,y){

    // if(y===undefined ){
    //   for ( let i = 0 ; i < x ; i++){
    //     this[i] = [];  
    //     console.log('only y');
    //   }
    // }else{
      this.length = x;
      for ( let i = 0 ; i < x ; i++){
        this[i] = [];
        this[i].length = y;  
        console.log('x and y');
      }
    // }
  }


  fill(value){
    let iMax = this.length;
    let jMax = this[0].length;
  
    for (let i = 0; i < iMax; i++) {
      for (let j = 0; j < jMax; j++) {
        this[i][j] = value;
      }
    } 
  }   

  set(x,y,n){
    this[x][y] = n;
  }

   findIndex2D (element){
    let iMax = this.length;
    let jMax = this[0].length;
  
    for (let i = 0; i < iMax; i++) {
      for (let j = 0; j < jMax; j++) {
  
        if(board[j][i] === element){
          let pos;
          pos.x = j;
          pos.y = i;
          return pos;
        }
        
      }
    }
  }

}
