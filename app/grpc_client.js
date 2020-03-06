// 如果是动态代码生成，还是静态代码生成，
// 提前指定 proto 的文件位置，在运行时动态生成，
// 静态生成，和 java 一样，
// 要想使用，那么全部使用动态生成或者静态生成，
// 动态生成或者静态生成的方式，不管哪种方式，都是一样的，都需要将他弄到其他的东西中
//

var PROTO_FILE_PATH = "/Users/quyixiao/WebstormProjects/grpc_demo/proto/Student.proto";

var grpc = require("grpc");

var grpcService = grpc.load(PROTO_FILE_PATH).com.shengsiyuan.proto;

// node js 是一个异步的框架，node js 绝大多数的情况下都是通过异步的情况来做的
var client = new grpcService.StudentService('localhost:8899', grpc.credentials.createInsecure());

client.getRealNameByUsername({username: 'lisi'}, function (error, respData) {
    console.log(respData);
})









