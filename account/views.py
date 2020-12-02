from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from account.serializers import UserSerializer


class RegisterView(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response({"type": "success", "message": "User Created Successfully"}, status=status.HTTP_200_OK)

        return Response({"type": "error", "message": "Something Went Wrong"}, status=status.HTTP_200_OK)


class LoginView(APIView):
    def get(self, request):
        return Response("hello world", status=status.HTTP_200_OK)
