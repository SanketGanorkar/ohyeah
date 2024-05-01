#include <iostream>
using namespace std;

class B
{
public:
    int a;
    int b;

public:
    int add()
    {
        return a + b;
    }

    // + ko overload kiya
    void operator+(B &obj)
    {
        int val1 = this->a;
        int val2 = obj.a;
        cout << "output" << val2 - val1 << endl;
    }

    // () ko overload kiya
    void operator()()
    {
        cout << "main bracker hun" << this->a << endl;
    }
};

class Animal
{
public:
    void speak()
    {
        cout << "Speaking " << endl;
    }
};

class Dog : public Animal
{

public:
    void bark()
    {
        cout << "Barking " << endl;
    }
};

class cat : public Dog{
    public:
    void mew(){
        cout<<"mew"<<endl;
    }
};
int main()
{

    cat obj;
    obj.speak();
    return 0;
    // B obj1, obj2;

    // obj1.a = 4;
    // obj2.a = 7;

    // obj1 + obj2;
    // obj1();
}

// why pointers are not possible in java ?
// diff between string and string builder ?
// pure object oriented kaa nahi aahe java ?
// primitive and non-primitive diff in java ?
// package in java
// static , abstract 