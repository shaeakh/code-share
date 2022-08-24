#include <stdio.h>
#include <stdlib.h>
struct h{
    int i;
    float j;
    double k;
};

int main()
{
    struct h *m = (struct h *)malloc(sizeof(struct h));
    m -> i =1;
    m -> j =1;  // this is 1st para
    m -> k =1;
    printf("%d %f %lf\n",m->i,m->j,m->k);




    struct h n;
    n.i = 1;
    n.j = 1;    // this is 2nt para
    n.k = 1;
    printf("%d %f %lf",n.i,n.j,n.k);

    return 0;
}
