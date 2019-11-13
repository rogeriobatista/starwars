import { LoaderService } from 'src/app/shared/loader/loader.service'
import { Injectable } from '@angular/core';

@Injectable()
export default class GoogleImageSearchService {

    constructor(private loaderService: LoaderService) { }

    searchImage(query) {
        query = encodeURIComponent(query)

        return new Promise((resolve, reject) => {

            // https://crossorigin.me/
            // https://cors-anywhere.herokuapp.com/

            this.loaderService.show();

            fetch(`https://cors-anywhere.herokuapp.com/https://www.google.com.ua/search?q=${query}&as_st=y&hl=pt-BR&tbs=itp:photo&tbm=isch&gbv=1&sei=yPTJXcjuAvir5OUP7-CQgAk`)
                .then(res => res.text())
                .then(res => {

                    const parser = new DOMParser()
                    let parserResult = parser.parseFromString(res, "text/html")

                    let images = parserResult.getElementById("ires").childNodes[0]

                    if (images.nodeName === "DIV") {

                        this.loaderService.hide();

                        resolve(this.googleGetMobile(images))
                    } else if (images.nodeName === "TABLE") {

                        this.loaderService.hide();

                        resolve(this.googleGetDesktop(images))
                    } else {

                        this.loaderService.hide();

                        reject("Unknown System")
                    }

                })
                .catch(err => {
                    this.loaderService.hide();
                    reject(err)
                })
        })
    }

    googleGetMobile(images) {

        images = Array.from(images.childNodes)

        return images.map((imgDiv) => {
            console.log(imgDiv.getAttribute("href"));
            return imgDiv.childNodes[0].src
        })
    }

    googleGetDesktop(images) {

        images = images.childNodes[0].childNodes

        let imgSrc = []

        images.forEach((tRow) => {
            tRow = tRow.childNodes
            tRow.forEach((tCol) => {
                let aLink = tCol.childNodes[0].childNodes[0]
                imgSrc.push(aLink.src)
            })
        })

        return imgSrc
    }

}