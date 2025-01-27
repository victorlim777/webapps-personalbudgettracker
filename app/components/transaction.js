import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class Transaction extends Component {
  @service transaction;

  @tracked totalPendapatan = 0;
  @tracked totalPengeluaran = 0;
  @tracked totalSaldo = 0;

  @action
  addToTable() {
    let judul = document.getElementById('judul').value;
    let jumlah = document.getElementById('jumlah').value;
    let kategori = document.getElementById('kategori').value;
    let tanggal = document.getElementById('tanggal').value;
    let table = document.querySelector('#transaction-table tbody');
    let row = table.insertRow(0);
    let cell_judul = row.insertCell(0);
    let cell_jumlah = row.insertCell(1);
    let cell_kategori = row.insertCell(2);
    let cell_tanggal = row.insertCell(3);
    cell_judul.innerHTML = judul;
    cell_jumlah.innerHTML = jumlah;
    cell_kategori.innerHTML = kategori;
    cell_tanggal.innerHTML = tanggal;

    let transaksiTotal = parseInt(jumlah);

    if(transaksiTotal >= 0){
      this.totalPendapatan = this.totalPendapatan + transaksiTotal;
    }
    else if(transaksiTotal < 0){
      this.totalPengeluaran = this.totalPengeluaran + transaksiTotal;
    }
    
    this.totalSaldo = this.totalSaldo + transaksiTotal;
    
    //console.log(this.totalPendapatan);
    //console.log(this.totalPengeluaran);
    //console.log(this.saldoTersisa);

    const { totalPendapatan, totalPengeluaran, totalSaldo } = this.args;
    this.transaction.addPendapatan({
      totalPendapatan: this.totalPendapatan,
    });
    this.transaction.addPengeluaran({
      totalPengeluaran: this.totalPengeluaran,
    });
    this.transaction.addTotalSaldo({
      totalSaldo: this.totalSaldo,
    });
  }
}
