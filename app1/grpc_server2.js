// 如果是动态代码生成，还是静态代码生成，
// 提前指定 proto 的文件位置，在运行时动态生成，
// 静态生成，和 java 一样，
// 要想使用，那么全部使用动态生成或者静态生成，
// 动态生成或者静态生成的方式，不管哪种方式，都是一样的，都需要将他弄到其他的东西中
//

var service = require("/Users/quyixiao/WebstormProjects/grpc_demo/static_codegen/proto/Student_grpc_pb")
var messages = require("/Users/quyixiao/WebstormProjects/grpc_demo/static_codegen/proto/Student_pb")

var grpc = require("grpc");

var server = new grpc.Server()

server.addService(service.StudentServiceService, {
    getRealNameByUsername: getRealNameByUsername,
    getStudentsByAge: getStudentsByAge,
    getStudentsWrapperByAges: getStudentsWrapperByAges,
    biTalk: biTalk,
})

server.bind("localhost:8899", grpc.ServerCredentials.createInsecure());
server.start();

function getRealNameByUsername(call, callback) {
    console.log('call:' + call.request.getUsername());
    var myResponse = new messages.MyResponse();
    myResponse.setRealname("赵六");
    callback(null, myResponse);
}

function getStudentsByAge(call, callback) {

}

function getStudentsWrapperByAges(call, callback) {

}

function biTalk(call, callback) {

}






