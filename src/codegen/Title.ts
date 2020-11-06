/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "@creditkarma/thrift-server-core";
export interface ITitle {
    title?: string;
    subtitle?: string;
}
export interface ITitleArgs {
    title?: string;
    subtitle?: string;
}
export const TitleCodec: thrift.IStructCodec<ITitleArgs, ITitle> = {
    encode(args: ITitleArgs, output: thrift.TProtocol): void {
        const obj: any = {
            title: args.title,
            subtitle: args.subtitle
        };
        output.writeStructBegin("Title");
        if (obj.title != null) {
            output.writeFieldBegin("title", thrift.TType.STRING, 1);
            output.writeString(obj.title);
            output.writeFieldEnd();
        }
        if (obj.subtitle != null) {
            output.writeFieldBegin("subtitle", thrift.TType.STRING, 2);
            output.writeString(obj.subtitle);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    },
    decode(input: thrift.TProtocol): ITitle {
        let _args: any = {};
        input.readStructBegin();
        while (true) {
            const ret: thrift.IThriftField = input.readFieldBegin();
            const fieldType: thrift.TType = ret.fieldType;
            const fieldId: number = ret.fieldId;
            if (fieldType === thrift.TType.STOP) {
                break;
            }
            switch (fieldId) {
                case 1:
                    if (fieldType === thrift.TType.STRING) {
                        const value_1: string = input.readString();
                        _args.title = value_1;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.TType.STRING) {
                        const value_2: string = input.readString();
                        _args.subtitle = value_2;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                default: {
                    input.skip(fieldType);
                }
            }
            input.readFieldEnd();
        }
        input.readStructEnd();
        return {
            title: _args.title,
            subtitle: _args.subtitle
        };
    }
};
export class Title extends thrift.StructLike implements ITitle {
    public title?: string;
    public subtitle?: string;
    public readonly _annotations: thrift.IThriftAnnotations = {};
    public readonly _fieldAnnotations: thrift.IFieldAnnotations = {};
    constructor(args: ITitleArgs = {}) {
        super();
        if (args.title != null) {
            const value_3: string = args.title;
            this.title = value_3;
        }
        if (args.subtitle != null) {
            const value_4: string = args.subtitle;
            this.subtitle = value_4;
        }
    }
    public static read(input: thrift.TProtocol): Title {
        return new Title(TitleCodec.decode(input));
    }
    public static write(args: ITitleArgs, output: thrift.TProtocol): void {
        return TitleCodec.encode(args, output);
    }
    public write(output: thrift.TProtocol): void {
        return TitleCodec.encode(this, output);
    }
}
