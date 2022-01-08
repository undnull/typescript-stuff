import * as fs from "fs";

class UnixTime {
    millis: number;

    constructor(value?: Date | number | undefined)
    {
        switch(typeof value) {
            case "object":
                this.millis = value.getTime();
                break;
            case "number":
                this.millis = value;
                break;
            default:
                this.millis = (new Date()).getTime();
                break;
        }
    }

    write(path: string) {
        console.log("writing", this.millis, "->", path);
        fs.writeFileSync(path, this.millis.toString());
    }
};

const ft: UnixTime = new UnixTime(0);
const ct: UnixTime = new UnixTime();

ft.write("ft.txt");
ct.write("ct.txt");
