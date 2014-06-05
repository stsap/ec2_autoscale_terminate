var aws = require("aws-sdk");
var creds = require("./credentials.json");
if (process.env.AWS_ACCESS_KEY) {
	aws.config.update({
		accessKeyId: process.env.AWS_ACCESS_KEY,
		secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
		region: process.env.AWS_REGION
	});
} else {
	aws.config.loadFromPath("credentials.json");
}

var params = {
	AutoScalingGroupName: process.env.AWS_AUTOSCALING_GROUP_NAME || creds.AutoScalingGroupName,
	MinSize: 0,
	MaxSize: 0,
	DesiredCapacity: 0
};
new aws.AutoScaling().
	updateAutoScalingGroup(params).
	on("success", function () { console.log(arguments); }).
	on("error", function () { console.log(arguments); }).
	send();
