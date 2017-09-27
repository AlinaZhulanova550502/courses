#include "stdafx.h"

int PCIDevices();

int main()
{
	SetConsoleOutputCP(1251);
	if (PCIDevices() == 1) 
	{
		printf("%s", "\nAbort function PCIDevices\n");
		exit;
	};
	return 0;
}


int PCIDevices()
{
	HDEVINFO hDeviceInfoSet = SetupDiGetClassDevs(NULL, "PCI", NULL, DIGCF_PRESENT | DIGCF_ALLCLASSES);
	//returns a handle to a device information set that contains requested 
	//device information elements
	if (hDeviceInfoSet == INVALID_HANDLE_VALUE)
	{
		printf("%s%d", "error: ", GetLastError());
		return 1;
	}

	SP_DEVINFO_DATA DeviceInfoData;			//struct defines a device instance of a member of the information set
	DeviceInfoData.cbSize = sizeof(SP_DEVINFO_DATA);	//the size, in bytes, of the SP_DEVINFO_DATA

	for (DWORD i = 0; SetupDiEnumDeviceInfo(hDeviceInfoSet, i, &DeviceInfoData); i++)		// returns a SP_DEVINFO_DATA structure that specifies a device information element in a device information set
	{
		DWORD DataT;
		LPTSTR buffer = NULL;
		DWORD buffersize = 0;

		while (!SetupDiGetDeviceRegistryProperty(hDeviceInfoSet, &DeviceInfoData, SPDRP_DEVICEDESC, //retrieves a specified Plug and Play device property
			&DataT, (PBYTE)buffer, buffersize, &buffersize))
		{
			if (GetLastError() == ERROR_INSUFFICIENT_BUFFER)
			{
				if (buffer) LocalFree(buffer);
				buffer = (LPSTR)LocalAlloc(LPTR, buffersize * 2);
			}
			else break;
		}

		printf("%s\n", buffer);
		if (buffer) LocalFree(buffer);
	}

	if (GetLastError() != NO_ERROR && GetLastError() != ERROR_NO_MORE_ITEMS) return 0;
	SetupDiDestroyDeviceInfoList(hDeviceInfoSet);			// deletes a device information set
	return 0;
}
