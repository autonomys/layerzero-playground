/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../common";

export type OriginStruct = {
  srcEid: BigNumberish;
  sender: BytesLike;
  nonce: BigNumberish;
};

export type OriginStructOutput = [number, string, BigNumber] & {
  srcEid: number;
  sender: string;
  nonce: BigNumber;
};

export type MessagingFeeStruct = {
  nativeFee: BigNumberish;
  lzTokenFee: BigNumberish;
};

export type MessagingFeeStructOutput = [BigNumber, BigNumber] & {
  nativeFee: BigNumber;
  lzTokenFee: BigNumber;
};

export type MessagingReceiptStruct = {
  guid: BytesLike;
  nonce: BigNumberish;
  fee: MessagingFeeStruct;
};

export type MessagingReceiptStructOutput = [
  string,
  BigNumber,
  MessagingFeeStructOutput
] & { guid: string; nonce: BigNumber; fee: MessagingFeeStructOutput };

export interface MyOAppInterface extends utils.Interface {
  functions: {
    "allowInitializePath((uint32,bytes32,uint64))": FunctionFragment;
    "data()": FunctionFragment;
    "endpoint()": FunctionFragment;
    "isComposeMsgSender((uint32,bytes32,uint64),bytes,address)": FunctionFragment;
    "lzReceive((uint32,bytes32,uint64),bytes32,bytes,address,bytes)": FunctionFragment;
    "nextNonce(uint32,bytes32)": FunctionFragment;
    "oAppVersion()": FunctionFragment;
    "owner()": FunctionFragment;
    "peers(uint32)": FunctionFragment;
    "quote(uint32,string,bytes,bool)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "send(uint32,string,bytes)": FunctionFragment;
    "setDelegate(address)": FunctionFragment;
    "setPeer(uint32,bytes32)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "allowInitializePath"
      | "data"
      | "endpoint"
      | "isComposeMsgSender"
      | "lzReceive"
      | "nextNonce"
      | "oAppVersion"
      | "owner"
      | "peers"
      | "quote"
      | "renounceOwnership"
      | "send"
      | "setDelegate"
      | "setPeer"
      | "transferOwnership"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "allowInitializePath",
    values: [OriginStruct]
  ): string;
  encodeFunctionData(functionFragment: "data", values?: undefined): string;
  encodeFunctionData(functionFragment: "endpoint", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "isComposeMsgSender",
    values: [OriginStruct, BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "lzReceive",
    values: [OriginStruct, BytesLike, BytesLike, string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "nextNonce",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "oAppVersion",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "peers", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "quote",
    values: [BigNumberish, string, BytesLike, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "send",
    values: [BigNumberish, string, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "setDelegate", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setPeer",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "allowInitializePath",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "data", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "endpoint", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isComposeMsgSender",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "lzReceive", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nextNonce", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "oAppVersion",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "peers", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "quote", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "send", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setDelegate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setPeer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "MessageReceived(string,uint32,bytes32)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "PeerSet(uint32,bytes32)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "MessageReceived"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PeerSet"): EventFragment;
}

export interface MessageReceivedEventObject {
  message: string;
  senderEid: number;
  sender: string;
}
export type MessageReceivedEvent = TypedEvent<
  [string, number, string],
  MessageReceivedEventObject
>;

export type MessageReceivedEventFilter = TypedEventFilter<MessageReceivedEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface PeerSetEventObject {
  eid: number;
  peer: string;
}
export type PeerSetEvent = TypedEvent<[number, string], PeerSetEventObject>;

export type PeerSetEventFilter = TypedEventFilter<PeerSetEvent>;

export interface MyOApp extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MyOAppInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    allowInitializePath(
      origin: OriginStruct,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    data(overrides?: CallOverrides): Promise<[string]>;

    endpoint(overrides?: CallOverrides): Promise<[string]>;

    isComposeMsgSender(
      arg0: OriginStruct,
      arg1: BytesLike,
      _sender: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    lzReceive(
      _origin: OriginStruct,
      _guid: BytesLike,
      _message: BytesLike,
      _executor: string,
      _extraData: BytesLike,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<ContractTransaction>;

    nextNonce(
      arg0: BigNumberish,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { nonce: BigNumber }>;

    oAppVersion(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        senderVersion: BigNumber;
        receiverVersion: BigNumber;
      }
    >;

    owner(overrides?: CallOverrides): Promise<[string]>;

    peers(
      eid: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string] & { peer: string }>;

    quote(
      _dstEid: BigNumberish,
      _message: string,
      _options: BytesLike,
      _payInLzToken: boolean,
      overrides?: CallOverrides
    ): Promise<[MessagingFeeStructOutput] & { fee: MessagingFeeStructOutput }>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    send(
      _dstEid: BigNumberish,
      _message: string,
      _options: BytesLike,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<ContractTransaction>;

    setDelegate(
      _delegate: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    setPeer(
      _eid: BigNumberish,
      _peer: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  allowInitializePath(
    origin: OriginStruct,
    overrides?: CallOverrides
  ): Promise<boolean>;

  data(overrides?: CallOverrides): Promise<string>;

  endpoint(overrides?: CallOverrides): Promise<string>;

  isComposeMsgSender(
    arg0: OriginStruct,
    arg1: BytesLike,
    _sender: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  lzReceive(
    _origin: OriginStruct,
    _guid: BytesLike,
    _message: BytesLike,
    _executor: string,
    _extraData: BytesLike,
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractTransaction>;

  nextNonce(
    arg0: BigNumberish,
    arg1: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  oAppVersion(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & {
      senderVersion: BigNumber;
      receiverVersion: BigNumber;
    }
  >;

  owner(overrides?: CallOverrides): Promise<string>;

  peers(eid: BigNumberish, overrides?: CallOverrides): Promise<string>;

  quote(
    _dstEid: BigNumberish,
    _message: string,
    _options: BytesLike,
    _payInLzToken: boolean,
    overrides?: CallOverrides
  ): Promise<MessagingFeeStructOutput>;

  renounceOwnership(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  send(
    _dstEid: BigNumberish,
    _message: string,
    _options: BytesLike,
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractTransaction>;

  setDelegate(
    _delegate: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  setPeer(
    _eid: BigNumberish,
    _peer: BytesLike,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    allowInitializePath(
      origin: OriginStruct,
      overrides?: CallOverrides
    ): Promise<boolean>;

    data(overrides?: CallOverrides): Promise<string>;

    endpoint(overrides?: CallOverrides): Promise<string>;

    isComposeMsgSender(
      arg0: OriginStruct,
      arg1: BytesLike,
      _sender: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    lzReceive(
      _origin: OriginStruct,
      _guid: BytesLike,
      _message: BytesLike,
      _executor: string,
      _extraData: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    nextNonce(
      arg0: BigNumberish,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    oAppVersion(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        senderVersion: BigNumber;
        receiverVersion: BigNumber;
      }
    >;

    owner(overrides?: CallOverrides): Promise<string>;

    peers(eid: BigNumberish, overrides?: CallOverrides): Promise<string>;

    quote(
      _dstEid: BigNumberish,
      _message: string,
      _options: BytesLike,
      _payInLzToken: boolean,
      overrides?: CallOverrides
    ): Promise<MessagingFeeStructOutput>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    send(
      _dstEid: BigNumberish,
      _message: string,
      _options: BytesLike,
      overrides?: CallOverrides
    ): Promise<MessagingReceiptStructOutput>;

    setDelegate(_delegate: string, overrides?: CallOverrides): Promise<void>;

    setPeer(
      _eid: BigNumberish,
      _peer: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "MessageReceived(string,uint32,bytes32)"(
      message?: null,
      senderEid?: null,
      sender?: null
    ): MessageReceivedEventFilter;
    MessageReceived(
      message?: null,
      senderEid?: null,
      sender?: null
    ): MessageReceivedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;

    "PeerSet(uint32,bytes32)"(eid?: null, peer?: null): PeerSetEventFilter;
    PeerSet(eid?: null, peer?: null): PeerSetEventFilter;
  };

  estimateGas: {
    allowInitializePath(
      origin: OriginStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    data(overrides?: CallOverrides): Promise<BigNumber>;

    endpoint(overrides?: CallOverrides): Promise<BigNumber>;

    isComposeMsgSender(
      arg0: OriginStruct,
      arg1: BytesLike,
      _sender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lzReceive(
      _origin: OriginStruct,
      _guid: BytesLike,
      _message: BytesLike,
      _executor: string,
      _extraData: BytesLike,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<BigNumber>;

    nextNonce(
      arg0: BigNumberish,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    oAppVersion(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    peers(eid: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    quote(
      _dstEid: BigNumberish,
      _message: string,
      _options: BytesLike,
      _payInLzToken: boolean,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    send(
      _dstEid: BigNumberish,
      _message: string,
      _options: BytesLike,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<BigNumber>;

    setDelegate(
      _delegate: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    setPeer(
      _eid: BigNumberish,
      _peer: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    allowInitializePath(
      origin: OriginStruct,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    data(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    endpoint(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isComposeMsgSender(
      arg0: OriginStruct,
      arg1: BytesLike,
      _sender: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lzReceive(
      _origin: OriginStruct,
      _guid: BytesLike,
      _message: BytesLike,
      _executor: string,
      _extraData: BytesLike,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    nextNonce(
      arg0: BigNumberish,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    oAppVersion(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    peers(
      eid: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    quote(
      _dstEid: BigNumberish,
      _message: string,
      _options: BytesLike,
      _payInLzToken: boolean,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    send(
      _dstEid: BigNumberish,
      _message: string,
      _options: BytesLike,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setDelegate(
      _delegate: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setPeer(
      _eid: BigNumberish,
      _peer: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}
