// Online Java Compiler
// Use this editor to write, compile and run your Java code online

class A{
    A(int x, int id){
        this.x = x;
        this.id = id;
    }
    private int x;
    private int id;
    void Cout(){
        System.out.println("Hello from "+id+" x = "+x);
    }
    void Cng(int id){
        this.id = id;
    }
}



class HelloWorld {
    public static void main(String[] args) {
        A a = new A(2,1);
        a.Cout();
        A b = new A(3,2);
        b.Cout();
        a = b; 
        a.Cout();
        b.Cng(5);
        a.Cout();
    }
}
