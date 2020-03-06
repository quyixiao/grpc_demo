// 生成静态文件
// grpc_tools_node_protoc --js_out=import_style=commonjs,binary:static_codegen/ --grpc_out=static_codegen --plugin=protoc-gen-grpc=/usr/local/bin/grpc_tools_node_protoc_plugin proto/Student.proto
//


var service = require("/Users/quyixiao/WebstormProjects/grpc_demo/static_codegen/proto/Student_grpc_pb")
var messages = require("/Users/quyixiao/WebstormProjects/grpc_demo/static_codegen/proto/Student_pb")

var grpc = require("grpc")
var client = new service.StudentServiceClient("localhost:8899", grpc.credentials.createInsecure());
var request = new messages.MyRequest();

request.setUsername("wangwu");

client.getRealNameByUsername(request, function (error, respData) {
    console.log(respData.getRealname());
});





