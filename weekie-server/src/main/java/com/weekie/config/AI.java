package com.weekie.config;
//
//import java.awt.*;
//import java.io.*;
//import java.net.HttpURLConnection;
//import java.net.URL;
//import java.time.LocalDateTime;
//import java.util.Date;
//import java.text.SimpleDateFormat;6
//
//
//import com.weekie.vo.ScheduleVO;
//i ;   .'mport org.json.JSONObject;
//
//public class AI{
//    public static void main(String[] args) {
//        String userInput = "我明天要给母亲在海底捞火锅庆生，这是她70大寿";
//        test(userInput);
//    }
//
//    public static String getAccessToken() {
//        String url = "https://aip.baidubce.com/oauth/2.0/token?client_id=hiDp7c7DVuosgjuLVci7R7q0&client_secret=4sZlvwcPiATCd5ExVh3DeZ48UYkUWeZS&grant_type=client_credentials";
//        try {
//            URL urlObj = new URL(url);
//            HttpURLConnection connection = (HttpURLConnection) urlObj.openConnection();
//            connection.setRequestMethod("POST");
//            connection.setRequestProperty("Content-Type", "application/json");
//            connection.setRequestProperty("Accept", "application/json");
//            connection.setDoOutput(true);
//
//            String payload = "{}";
//            try (OutputStream os = connection.getOutputStream()) {
//                byte[] input = payload.getBytes("utf-8");
//                os.write(input, 0, input.length);
//            }
//
//            try (BufferedReader br = new BufferedReader(new InputStreamReader(connection.getInputStream(), "utf-8"))) {
//                StringBuilder response = new StringBuilder();
//                String responseLine = null;
//                while ((responseLine = br.readLine()) != null) {
//                    response.append(responseLine.trim());
//                }
//                JSONObject json = new JSONObject(response.toString());
//                return json.getString("access_token");
//            }
//        } catch (Exception e) {
//            e.printStackTrace();
//        }
//        return null;
//    }
//
//    public static ScheduleVO test(String userInput) {
//        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm");
//        Date date = new Date();
//        String preText = "接下来的所有对话中，你可以使用外部的工具来回答问题。\n你必须按照规定的格式来使用工具，当你使用工具时，我会在下一轮对话给你工具调用结果，然后你应该根据实际结果判断是否需要进一步使用工具，或给出你的回答。\n工具可能有多个，每个工具由名称、描述、参数组成，参数符合标准的json schema。\n\n下面是工具列表:\n名称：add_task\n描述：添加一个日程\n参数：{\"type\":\"object\",\"properties\":{\"title\":{\"type\":\"string\",\"description\":\"任务的标题\"},\"startTime\":{\"type\":\"string\",\"description\":\"任务开始时间，精确到分钟\"},\"endTime\":{\"type\":\"string\",\"description\":\"任务结束时间，精确到分钟\"},\"deadline\":{\"type\":\"string\",\"description\":\"任务的截止日期\"},\"Importance\":{\"type\":\"boolean\",\"description\":\"任务的重要性，布尔值表示\"},\"Urgency\":{\"type\":\"boolean\",\"description\":\"任务的紧急性，布尔值表示\"},\"tag\":{\"type\":\"string\",\"description\":\"任务标签，用于分类\"},\"desc\":{\"type\":\"string\",\"description\":\"任务的描述，根据用户描述日程的特征生成\"},\"taskID\":{\"type\":\"string\",\"description\":\"任务的唯一标识符，由后端生成\"}},\"required\":[\"title\",\"startTime\",\"endTime\",\"deadline\",\"Importance\",\"Urgency\",\"tag\",\"desc\",\"taskID\"]}\n\n\n你的输出必须按照如下格式，只包含2行，不需要输出任何解释或其他无关内容:\nAction: 使用的工具名称\nAction Input: 使用工具的参数，json格式\n你的问题：";
//        userInput = preText + "现在是" + formatter.format(date) + "。" + userInput;
//        String accessToken = getAccessToken();
//        String url = "https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat/ernie-func-8k?access_token=" + accessToken;
//
//        JSONObject payload = new JSONObject();
//        long t1=System.currentTimeMillis();
//        payload.put("messages", new JSONObject[]{new JSONObject().put("role", "user").put("content", userInput)});
//        try {
//            URL urlObj = new URL(url);
//            HttpURLConnection connection = (HttpURLConnection) urlObj.openConnection();
//            connection.setRequestMethod("POST");
//            connection.setRequestProperty("Content-Type", "application/json");
//            connection.setDoOutput(true);
//
//            try (OutputStream os = connection.getOutputStream()) {
//                byte[] input = payload.toString().getBytes("utf-8");
//                os.write(input, 0, input.length);
//            }
//
//            try (BufferedReader br = new BufferedReader(new InputStreamReader(connection.getInputStream(), "utf-8"))) {
//                StringBuilder response = new StringBuilder();
//                String responseLine = null;
//                while ((responseLine = br.readLine()) != null) {
//                    response.append(responseLine.trim());
//                }
////                ScheduleVO scheduleVO= com.alibaba.fastjson2.JSONObject.parseObject(response.toString(),ScheduleVO.class);
//                JSONObject json = new JSONObject(response.toString());
//                String result=json.getString("result");
//                result=result.substring(result.indexOf("{"));
//                ScheduleVO scheduleVO= com.alibaba.fastjson2.JSONObject.parseObject(result,ScheduleVO.class);
//                return scheduleVO;
//            }
//        } catch (Exception e) {
//            System.out.println("Oops, something went wrong.");
//            e.printStackTrace();
//        }
//       return null;
//    }
//
//}
import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.weekie.vo.ScheduleVO;
import okhttp3.*;
import org.json.JSONObject;

import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class AI {
    private static final OkHttpClient client = new OkHttpClient();
    private static final Gson gson = new Gson();

    public static String getAccessToken() throws IOException {
        String url = "https://aip.baidubce.com/oauth/2.0/token";
        HttpUrl httpUrl = HttpUrl.parse(url).newBuilder()
                .addQueryParameter("client_id", "hiDp7c7DVuosgjuLVci7R7q0")
                .addQueryParameter("client_secret", "4sZlvwcPiATCd5ExVh3DeZ48UYkUWeZS")
                .addQueryParameter("grant_type", "client_credentials")
                .build();

        Request request = new Request.Builder()
                .url(httpUrl)
                .post(RequestBody.create("", null))
                .build();

        try (Response response = client.newCall(request).execute()) {
            JsonObject jsonResponse = gson.fromJson(response.body().string(), JsonObject.class);
            return jsonResponse.get("access_token").getAsString();
        }
    }

    public static ScheduleVO test(String userInput) throws IOException {
        String accessToken = getAccessToken();
        String serviceType = "ernie-4.0-8k-0104";
        String url = "https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat/" + serviceType + "?access_token=" + accessToken;
        String currentTime = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm").format(LocalDateTime.now());
        userInput = "现在是" + currentTime + "。" + userInput;

        JsonObject message = new JsonObject();

        message.addProperty("role", "user");
        message.addProperty("content", "接下来的所有对话中，你可以使用外部的工具来回答问题。\n你必须按照规定的格式来使用工具，当你使用工具时，我会在下一轮对话给你工具调用结果，然后你应该根据实际结果判断是否需要进一步使用工具，或给出你的回答。\n工具可能有多个，每个工具由名称、描述、参数组成，参数符合标准的json schema，且你需要严格按照参数的格式描述生成参数。\n\n下面是工具列表:\n名称：add_task\n描述：添加一个日程\n参数：{\"type\":\"object\",\"properties\":{\"title\":{\"type\":\"string\",\"description\":\"任务的标题\"},\"startTime\":{\"type\":\"time\",\"description\":\"任务开始时间，格式为%Y-%m-%d %H:%M\"},\"endTime\":{\"type\":\"time\",\"description\":\"任务结束时间，格式为%Y-%m-%d %H:%M\"},\"deadline\":{\"type\":\"time\",\"description\":\"任务的截止时间，格式为%Y-%m-%d %H:%M\"},\"Importance\":{\"type\":\"boolean\",\"description\":\"任务的重要性，布尔值表示\"},\"Urgency\":{\"type\":\"boolean\",\"description\":\"任务的紧急性，布尔值表示\"},\"tag\":{\"type\":\"string\",\"description\":\"任务标签，用于分类\"},\"desc\":{\"type\":\"string\",\"description\":\"length>30;任务的描述，根据用户描述日程的特征生成，可以适当添加一些意见和建议\"},\"taskID\":{\"type\":\"string\",\"description\":\"任务的唯一标识符，由后端生成\"}},\"required\":[\"title\",\"startTime\",\"endTime\",\"deadline\",\"Importance\",\"Urgency\",\"tag\",\"desc\",\"taskID\"]}\n\n\n你的输出必须按照如下格式，只包含2行，不需要输出任何解释或其他无关内容:\nAction: 使用的工具名称\nAction Input: 使用工具的参数，json格式\n你的问题：" + userInput
        );

        JsonArray messages = new JsonArray();
        messages.add(message);

        JsonObject jsonBody = new JsonObject();
        jsonBody.add("messages", messages);

        RequestBody body = RequestBody.create(jsonBody.toString(), MediaType.get("application/json; charset=utf-8"));
        Request request = new Request.Builder()
                .url(url)
                .post(body)
                .build();
//        JSONObject json = new JSONObject(response.toString());
//                String result=json.getString("result");
//                result=result.substring(result.indexOf("{"));
//                ScheduleVO scheduleVO= com.alibaba.fastjson2.JSONObject.parseObject(result,ScheduleVO.class);
//                return scheduleVO;
        try (Response response = client.newCall(request).execute()) {
            org.json.JSONObject jsonObject = new JSONObject(response.body().string());
            String result = jsonObject.getString("result");
            result=result.substring(result.indexOf("{"),result.indexOf("}")+1);
            ScheduleVO scheduleVO = com.alibaba.fastjson2.JSONObject.parseObject(result, ScheduleVO.class);
            return scheduleVO;

        }
    }

//    private static JsonObject parseActionResult(String result) {
//        Pattern pattern = Pattern.compile("Action Input: (.*)");
//        Matcher matcher = pattern.matcher(result);
//        if (matcher.find()) {
//            return gson.fromJson(matcher.group(1), JsonObject.class);
//        } else {
//            System.out.println("Oops, something went wrong.");
//            return null;
//        }
//    }

    public static void main(String[] args) throws IOException {
        String userInput = "我明天要给母亲在海底捞火锅庆生，这是她70大寿";
        test(userInput);
    }
}
