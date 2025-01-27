import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class TransactionService extends Service {
  @tracked totalTransaksiPendapatan = 0;
  @tracked totalTransaksiPengeluaran = 0;
  @tracked totalTransaksiSaldo = 0;

  addPendapatan(totalPendapatan) {
    this.totalTransaksiPendapatan = totalPendapatan;
    console.log(this.totalTransaksiPendapatan.totalPendapatan);

    //console.log(tables);
    //this.tableListing = [...this.tableListing, tables]
  }

  addPengeluaran(totalPengeluaran) {
    this.totalTransaksiPengeluaran = totalPengeluaran;
    console.log(this.totalTransaksiPengeluaran.totalPengeluaran);
  }

  addTotalSaldo(totalSaldo) {
    this.totalTransaksiSaldo = totalSaldo;
    console.log(this.totalTransaksiSaldo.totalSaldo);
  }
}
