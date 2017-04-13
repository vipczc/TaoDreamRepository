
//使用说明
//export const fun = (xx,xx) => {
//
//}

//计算数组分页数 getItmeCon(objData.data, 10)
export const getItmeCon = (getData, cont) => {
                let itmeCon = Math.ceil(getData.length / cont)
                return itmeCon * 10
            }
//切割数组方法 this.tableData = this.allData[0] = getDataTable(objData.data, 10)
export const getDataTable = (getData, cont) => {
                // let getData = [];//原始数据 无分页
                let showDataArr = []; //显示单元格数组
                let itmeCon = 0; ////分页数量
                let oneItem = []; //中间暂存数组
                // let cont = 10 ;//每页单元格个数
                itmeCon = Math.ceil(getData.length / cont); //分页 数量


                for (let j = 0; j < itmeCon; j++) {
                    for (let i = j * cont; i < (j + 1) * cont; i++) {

                        if (getData.length > i) {
                            oneItem.push(getData[i])

                        } else {
                            break;
                        }

                    }
                    showDataArr.push(oneItem)
                    // console.log(showDataArr);
                    oneItem = [];
                }
                return showDataArr
            }
