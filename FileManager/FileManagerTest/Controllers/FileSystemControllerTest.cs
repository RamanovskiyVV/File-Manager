using System;
using FileManager.Controllers;
using FileManager.IServices;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;

namespace FileManagerTest.Controllers
{
	[TestClass]
	public class FileSystemControllerTest
	{
		private FileSystemController controller;

		/// <summary>
		/// Test Initialize
		/// </summary>
		[TestInitialize]
		public void SetupContext()
		{
			controller = new FileSystemController();
		}

		/// <summary>
		/// test GetDrivers method with right data 
		/// </summary>
		[TestMethod]
		public void GetDrivers_WithRightData_Test_listOfDrivers()
		{
			var mockDriveService = new Mock<IDriveService>();
			this.controller.DriveService = mockDriveService.Object;
			string[] result = { "d", "c" };
			mockDriveService.Setup(services => services.GetDrives()).Returns(result);
			var json = controller.GetDrives();
			Assert.AreEqual(json.Data, result);	
		}

		/// <summary>
		/// test GetDirectories method with right data
		/// </summary>
		[TestMethod]
		public void GetDirectories_WithRightData_Test_listOfdirectory()
		{
			var mockDirectoryService = new Mock<IDirectoryService>();
			this.controller.DirectoryService = mockDirectoryService.Object;
			string[] result = { "directory1", "directory2" };
			mockDirectoryService.Setup(services => services.GetDirectoriesList("test")).Returns(result);
			var json = controller.GetDirectoriesList("test");
			Assert.AreEqual(json.Data, result);
		}
		/// <summary>
		/// Test Delete with wrong data
		/// </summary>
		/// <param name="path"></param>
		/// <param name="type"></param>
		[TestMethod]
		[DataRow(null, " ")]
		[DataRow("folder", " ")]
		[DataRow(" ", "file")]
		public void Delet_NullOrEmpty_Test(string path, string type)
		{			
			var json = controller.Delete(path,type);
			Assert.IsTrue(json is System.Web.Mvc.EmptyResult);
		}
	}
}
