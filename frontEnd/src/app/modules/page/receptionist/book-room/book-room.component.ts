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
  selectedRoom: string;

  scriptPost = {
    RoomName: '',
    Name: '',
    DateOfBirth: '',
    Phone: '',
    Address: '',
    IdentityCard: '',
    Email: '',
    ArrivalTime: 0,
    LeaveTime: 0,
    Relationship: [],
  };

  customer: FormGroup;
  formGroup: FormGroup;
  constructor(
    public receptionistPageService: ReceptionistPageService
  ) { }

  ngOnInit() {

    this.customer = new FormGroup({
      name: new FormControl,
      phone: new FormControl,
      cmnd: new FormControl,
      address: new FormControl,
      leaveTime: new FormControl,

    });
    this.receptionistPageService.getAllRoom().subscribe((res: any) => {
      if (res) {
        this.listAllRoom = res.filter(element => element.Status === 1);
        this.selectedRoom = this.listAllRoom[0].RoomName;
        // console.log('showlistRoom: ', this.listAllRoom);
        setInterval(() => {
          this.string_arrivalTime = moment().format('YYYY-MM-DDTHH:mm:ss');
          // console.log(moment( this.string_arrivalTime).format('X'));

        }, 1000);
      }
    });
  }
  onSubmit(dataForm) {
    const data = dataForm.value;
    //  console.log(data);
    this.scriptPost.Name = data.name;
    this.scriptPost.IdentityCard = data.cmnd;
    this.scriptPost.Phone = data.phone;
    this.scriptPost.Address = data.address;
    this.list_customerChild.forEach(value => this.scriptPost.Relationship.push(value));
    this.scriptPost.RoomName = this.selectedRoom;
    this.scriptPost.ArrivalTime = moment().unix();
    this.scriptPost.LeaveTime = Number(moment(data.leaveTime).format('X'));
    //  data.leaveTime;
    this.receptionistPageService.postCustometCheckin(this.scriptPost).subscribe((res: any) => {
      if (res) {
        console.log(res);
      }
    });
    //console.log(this.scriptPost);
    //this.cleanAll();
    // console.log(this.scriptPost);
  }
  refresh(): void {
    alert('Đặt Phòng Thành Công');
    window.location.reload();
  }
  cleanAll() {
    this.scriptPost.Name = '';
    this.scriptPost.IdentityCard = '';
    this.scriptPost.Phone = '';
    this.scriptPost.Address = '';
    this.scriptPost.Relationship = [];
    this.scriptPost.RoomName = '';
    this.scriptPost.ArrivalTime = 0;
    this.scriptPost.LeaveTime = 0;
    this.list_customerChild = [];


  }
  addtable() {
    if (this.nameChild != null && this.phoneChild != null && this.dobirth != null) {
      this.list_customerChild.push(
        {
          // stt: this.list_customerChild.length + 1,
          name: this.nameChild,
          phone: this.phoneChild,
          dateofbirth: this.dobirth,
          timestamp: moment(this.dobirth).format('X'),
          // aaa: moment.unix(Number(moment( this.dobirth).format('X'))).format('YYYY-MM-DD')
        });
    }
    // console.log(this.list_customerChild);
  }

  selectChange(event: any) {
    this.selectedRoom = event.target.value;
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
