import { Component, OnInit } from '@angular/core';
import { ReceptionistPageService } from '@app/modules/services';
import * as moment from 'moment';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-book-room',
  templateUrl: './book-room.component.html',
  styleUrls: ['./book-room.component.css']
})
export class BookRoomComponent implements OnInit {
  listAllRoom: any;
  string_arrivalTime = '';
  list_customerChild = [];
  nameChild: any;
  phoneChild: any;
  dobirth: any;
  selectedRoom = '0';
  scriptPost = {
    RoomName: '',
    Name: '',
    DateOfBirth: '',
    Phone: '',
    Address: '',
    IdentityCard: '',
    Email: '',
    ArrivalTime: '',
    LeaveTime: '',
    Relationship: [],
  };

  Relationship = {
    'Name': 'Nguyễn Con',
    'DateOfBirth': '1583229613',
    'Phone': ' ',
    'Address': ' ',
    'IdentityCard': ' ',
    'Email': ' '
  };



  customer: FormGroup;
  formGroup: FormGroup;
  constructor(
    public receptionistPageService: ReceptionistPageService
  ) { }

  ngOnInit() {

    // this.aaaa['Relationship'].push(this.Relationship);
    // console.log(this.aaaa);
    this.customer = new FormGroup({
      name: new FormControl,
      phone: new FormControl,
      cmnd: new FormControl,
      address: new FormControl,
      room: new FormControl,

    });
    this.receptionistPageService.getAllRoom().subscribe((res: any) => {
      if (res) {
        this.listAllRoom = res.filter(element => element.Status === 1);
        console.log('showlistRoom: ', this.listAllRoom);
        setInterval(() => {
          this.string_arrivalTime = moment().format('YYYY-MM-DDTHH:mm:ss');
          console.log(this.string_arrivalTime);
        }, 1000);
      }
    });
  }
  onSubmit(data) {
   // console.log(data);
    this.scriptPost.Name = data.name;
    this.scriptPost.IdentityCard = data.cmnd;
    this.scriptPost.Phone = data.phone;
    this.scriptPost.Address = data.address;

    console.log(this.selectedRoom);
  }
  addtable() {
    if (this.nameChild != null && this.phoneChild != null && this.dobirth != null) {
      this.list_customerChild.push(
        {
          stt: this.list_customerChild.length + 1,
          name: this.nameChild,
          phone: this.phoneChild,
          dateofbirth: this.dobirth,
          timestamp: moment(this.dobirth).format('X'),
          // aaa: moment.unix(Number(moment( this.dobirth).format('X'))).format('YYYY-MM-DD')
        });
    }
    console.log(this.list_customerChild);
  }

  selectChange(event: any) {
    // update the ui
    this.selectedRoom = event.target.value;
    console.log('show sele: ', this.selectedRoom  );
  }
  deleteItem(item) {
    const exitIndex = this.list_customerChild.findIndex(temp => {
      return item.stt === temp.stt;
    });
    this.list_customerChild.splice(exitIndex, 1);

  }
  onInput_nameChild_Change(name: any): void {
    this.nameChild = name;
  }
  onInput_phoneChild_Change(phone: any): void {
    this.phoneChild = phone;
  }
  onInput_dobChild_Change(dob: any): void {
    this.dobirth = dob;
  }












}
