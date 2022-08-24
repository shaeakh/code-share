#include <stdio.h> 
int main() 
{
    int i,j,k,x=0;
    for(i=0;i<6;i++){
        for(j=0;j<i;j++){
            switch(i+j-1){
             case -1:  
             case 0:
                x += 1;
                printf("%d %d case 0 %d\n",i,j,x);
                break;
             case 1:  
             case 2:   
             case 3:  
                x += 2;
                printf("%d %d case 3 %d\n",i,j,x);
             default:
                x += 3;
                printf("%d %d default %d\n",i,j,x);
            }
            printf("final %d\n",x);
        }
    }
    printf("x = %d\n",x);
    return 0;
} 
