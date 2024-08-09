export const variants = {
    right : {
        initial : {x:150 , opacity : 0.6},
        animate : {x : 0 , opacity : 1 , transition : {
            type:"spring",
            duration: 1.7,
                staggerChildren: 0.1,
          }}
    },
    left : {
        initial : {x:-150 , opacity : 0.6},
        animate : {x : 0 , opacity : 1 , transition : {
            type:"spring",
            duration: 1.7,
                staggerChildren: 0.1,
          }}
    }
}
