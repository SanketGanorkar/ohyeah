#include <iostream>
using namespace std;
class One {
    public:
    int a ;

    private:
    int b ;

    protected:
    int c;

    public:
    One(){
        cout<<"ban gaya"<<endl;
    }
};
class Two : public One{
    public:
    Two(){
        // able to access protected because we have inherited the One class.
        c = 10;
        cout<<"bana gaya 2"<<endl;
    }
    public:
    void display(){
        cout<<c<<endl;
    }
};
int main(){
    Two obj1;
    obj1.display();
    return 0;
}