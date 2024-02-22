//doituong trong cuoc song co nhieu nguoi moi nguoi co ten tuoi nghe nghiep
// template cho con nguoi phai co thuoc tinh de duoc goi la con nguoi
// vd name, age, role thuoc tinh
// phuongthuc
//tenclass phai trung file js
//xay dung ten tuoi cua con nguoi = constructor
//function trong class la method
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    talk(friendName) {
        console.log("Hello!", friendName);
        // console.log("My name is", this.name);
        // console.log("My age is", this.age);
    }

    getPersoninfo() {
        console.log("My name is", this.name);
        console.log("My age is", this.age);
    }

}

let teo = new Person("Teo", 18);
teo.talk("ti");
teo.getPersoninfo();
//talk&get là phương thức, có thể có đối số truyền vào hoặc ko có đối số
// truyền vào
//let ti = new Person();
//ti.talk(1);
export default Person;
